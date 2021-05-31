import OS from "os";
import WMI from "node-wmi";
import System from "systeminformation";
const {cpu, bios, diskLayout, fsSize, graphics, processes, networkInterfaces, baseboard} = System;
const {uptime} = OS;
let CACHE = null;

export default (req, res) => {
	let t = new Date().getTime();
	if(CACHE) return res.status(200).json({
		data: CACHE,
		time: new Date().getTime()-t
	})
	const $ = {};
	$.uptime = `${~~(uptime()/86400)}d ${~~(uptime()/3600%24)}h ${~~(uptime()/60%60)}m`;
	$.users = [OS.userInfo()];
	Promise.all([
		new Promise(async resolve => {
			await WMI.Query({class: "Win32_Keyboard"}, (e, d) => $.keyboard = d[0]);
			resolve();
		}),
		new Promise(async resolve => {
			await WMI.Query({class: "Win32_PointingDevice"}, (e, d) => $.mouse = d[0]);
			resolve();
		}),
		new Promise(async resolve => {
			await WMI.Query({class: "Win32_LogonSession"}, (e, d) => {
				let wt, date = new Date((d = d[0].StartTime).substring(0,4)+"-"+d.substring(4,6)+"-"+d.substring(6,8)+"T"+d.substring(8,10)+":"+d.substring(10,12)+":"+d.substring(12,14)+d.substring(14,18)+"Z");
				$.logonSession = `${(wt = new Date(new Date().getTime()-date.getTime())).getHours()}h ${wt.getMinutes()}m ${wt.getSeconds()}s`;
			})
			resolve();
		}),
		new Promise(async resolve => {
			let gData = await graphics();
			$.videoControllers = gData.controllers;
			$.displays = gData.displays;
			resolve();
		}),
		new Promise(async resolve => {
			$.network = await networkInterfaces();
			resolve();
		}),
		new Promise(async resolve => {
			$.baseboard = await baseboard();
			resolve();
		}),
		new Promise(async resolve => {
			$.cpu = await cpu();
			resolve();
		}),
		new Promise(async resolve => {
			$.bios = await bios();
			resolve();
		}),
		new Promise(async resolve => {
			$.disks = await diskLayout();
			resolve();
		}),
		new Promise(async resolve => {
			$.fileSystem = await fsSize();
			resolve();
		}),
		new Promise(async resolve => {
			$.processes = (await processes()).list;
			resolve();
		})
	]).then(() => {
		res.status(200).json({
			data: CACHE = $,
			time: new Date().getTime()-t
		})
	})
}