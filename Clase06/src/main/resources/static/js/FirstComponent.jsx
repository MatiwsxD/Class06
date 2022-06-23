ReactDOM.render(
    <h1>Hello, world!</h1>,
    document.getElementById('root')
   );

function tick() {
    const element = (
    <div>
        <h1>Hello, world xd!</h1>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
);
ReactDOM.render(element, document.getElementById('rooot'));}
setInterval(tick, 1000)


   