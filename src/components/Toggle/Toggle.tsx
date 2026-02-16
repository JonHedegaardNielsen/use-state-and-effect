import { useState } from "react"

export const Toggle = () => {
	const [isShown, setIsShown] = useState(true);
	if (isShown) {
		return <button onClick={() => setIsShown(false)}>Hide</button>
	}
	return (<><button onClick={() => setIsShown(true)}>Show</button>
		<p>hej med dig</p>
	</>
	)


}

