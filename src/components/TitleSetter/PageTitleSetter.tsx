import { useEffect, useState } from "react"

export const TitleSetter = () => {
	const [title, setTitle] = useState("");
	const [titleLength, settitleLength] = useState(0);
	const charecters: Array<string> = ['a', 'b'];
	useEffect(() => {
		document.title = title;
		settitleLength(title.length);

	}, [title]);
	return (
		<div>
			<input type="text" value={title} onChange={e => setTitle(e.target.value)}></input>
			<p>lenth: {titleLength}</p>
		</div>
	)
}

