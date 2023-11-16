import { useState } from 'react';
import QRCode from 'qrcode'
import './App.css';

function App() {
  const [url, setUrl] = useState('')
	const [qr, setQr] = useState('')

	const GenerateQRCode = () => {
		QRCode.toDataURL(url, {
			width: 800,
			margin: 2,
			color: {
				dark: '#335383FF',
				light: '#EEEEEEFF'
			}
		}, (err, url) => {
			if (err) return console.error(err)

			console.log(url)
			setQr(url)
		})
	}
  return (
    <div className="App">

        <h1>QR Generator</h1>
        <input 
				type="text"
				placeholder="e.g. https://google.com"
				value={url}
				onChange={e => setUrl(e.target.value)} 
		/>
			<button onClick={GenerateQRCode}>Generate</button>
			{qr && <>
				<img src={qr} />
				<a href={qr} download="qrcode.png">Download</a>
			</>}

		<footer>Made with ❤️ from <a href='https://github.com/rajkishorepatra'>Raj Kishore Patra</a></footer>
    </div>
  );
}

export default App;
