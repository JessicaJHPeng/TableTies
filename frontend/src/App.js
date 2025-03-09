import './App.css';
import logo from "./Tabletieslogo2.png"

function App() {
  return (
<div style={{width: '100%', height: '100%', position: 'relative', background: '#FFEFFC'}}>
    <img style={{width: 914, height: 641, left: -28, top: 860, position: 'absolute', transform: 'rotate(2deg)', transformOrigin: 'top left'}} src="https://placehold.co/914x641" />
    <div style={{width: 667, height: 835, left: 613, top: 0, position: 'absolute'}}>
        <div style={{width: 667, height: 835, left: 0, top: 0, position: 'absolute', background: '#C84473', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'}} />
        <div style={{left: 26, top: 153, position: 'absolute', color: '#FFEFFC', fontSize: 75, fontFamily: 'Playfair Display', fontWeight: '400', wordWrap: 'break-word'}}>Come sit with us</div>
        <div style={{width: 542, left: 27, top: 246, position: 'absolute', color: '#FFEFFC', fontSize: 36, fontFamily: 'Playfair Display', fontWeight: '400', wordWrap: 'break-word'}}>Match with a mentor, build things that last.<br/></div>
        <div style={{width: 616, height: 326, minWidth: 320, padding: 24, left: 26, top: 366, position: 'absolute', background: '#FFEFFC', borderRadius: 8, border: '1px #D9D9D9 solid', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 24, display: 'inline-flex'}}>
            <div data-state="Default" data-value Type="Placeholder" style={{alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8, display: 'flex'}}>
                <div></div>
                <div style={{alignSelf: 'stretch', minWidth: 240, paddingLeft: 16, paddingRight: 16, paddingTop: 12, paddingBottom: 12, background: 'white', borderRadius: 8, overflow: 'hidden', border: '1px #D9D9D9 solid', justifyContent: 'flex-start', alignItems: 'center', display: 'inline-flex'}}>
                    <div></div>
                </div>
            </div>
            <div data-state="Default" data-value Type="Placeholder" style={{alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8, display: 'flex'}}>
                <div></div>
                <div style={{alignSelf: 'stretch', minWidth: 240, paddingLeft: 16, paddingRight: 16, paddingTop: 12, paddingBottom: 12, background: 'white', borderRadius: 8, overflow: 'hidden', border: '1px #D9D9D9 solid', justifyContent: 'flex-start', alignItems: 'center', display: 'inline-flex'}}>
                    <div></div>
                </div>
            </div>
            <div data-align="Justify" style={{alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'center', gap: 16, display: 'inline-flex'}}>
                <div style={{flex: '1 1 0', padding: 12, background: '#040049', borderRadius: 8, overflow: 'hidden', border: '1px #1E1E1E solid', justifyContent: 'center', alignItems: 'center', gap: 8, display: 'flex'}}>
                    <div></div>
                </div>
            </div>
            <div style={{alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
                <div style={{position: 'relative', color: '#1E1E1E', fontSize: 16, fontFamily: 'Inter', fontWeight: '400', textDecoration: 'underline', lineHeight: 22.40, wordWrap: 'break-word'}}>Forgot password?</div>
            </div>
        </div>
    </div>
    <img style={{width: 366, height: 370, left: 110, top: 246, position: 'absolute', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'}} src={logo} />
</div>
  );
}

export default App;
