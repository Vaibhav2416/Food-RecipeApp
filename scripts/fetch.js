function navbar(){

    return `
    <h3>
            <a href="index.html">Home</a>
        </h3>
    <input type="text" placeholder="Enter Receipe ex:pizza"  id="inp" >
        <div id="options">
            <h3>
                <a href="random.html">Random Receipe</a>
            </h3>
            <h3>
                <a href="recipe.html">Receipe Of Day</a>
            </h3>
            <h3>
                <a href="Login.html">Login</a>
            </h3>
            <h3>
                <a href="Signup.html">Sign Up</a>
            </h3>
        </div>
    `;
}
export default navbar;
