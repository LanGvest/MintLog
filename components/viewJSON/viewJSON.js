import s from "./viewJSON.module.css";

function getBlockOfObject(object, nestedKey = "") {
	let keys = Object.keys(object);
	return (
		<div className={nestedKey ? s.objectContainer : ""}>
			{nestedKey && <p className={s.lineObject}>{nestedKey}:</p>}
			<div className={s.blockContainer} style={{marginLeft: nestedKey ? 30 : 0}}>
				{
					keys.map(key => {
						if(typeof object[key] === "object" && object[key] !== null) {
							if(object[key] instanceof Array) {
								return getBlockOfArray(object[key], key);
							} else {
								return getBlockOfObject(object[key], key);
							}
						} else {
							return `${object[key]}` ? <p key={key} className={s.line}>{key}:<span className={s.value}>{`${object[key]}`}</span></p> : null;
						}
					})
				}
			</div>
		</div>
	)
}

function getBlockOfArray(array, nestedKey = "") {
	return (
		<div className={nestedKey ? s.objectContainer : ""}>
			{nestedKey && <p className={s.lineObject}>{nestedKey}:</p>}
			{
				<div className={s.blockContainer} style={{marginLeft: nestedKey ? 30 : 0}}>
					{
						array.map((itemData, i) => {
							if(typeof itemData === "object" && itemData !== null) {
								if(itemData instanceof Array) {
									return getBlockOfArray(itemData, `№${i+1}`);
								} else {
									return getBlockOfObject(itemData, `№${i+1}`);
								}
							} else {
								return `${itemData}` ? <p key={i} className={s.line}>{i+1}:<span className={s.value}>{`${itemData}`}</span></p> : null;
							}
						})
					}
				</div>
			}
		</div>
	)
}


export default function ViewJSON({object, title}) {
	if(typeof object === "object" && object !== null) {
		return object instanceof Array ? getBlockOfArray(object) : getBlockOfObject(object);
	} else {
		return <p className={s.line}>{title}:<span className={s.value}>{object}</span></p>;
	}
}