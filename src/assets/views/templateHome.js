export const templateHome = () => {
    const containerHome = document.createElement('div');

    //contenido de login
    const contentHome = `
    <div class="home-banner">
        <div class="banner-content-container">
        <h1>Emprende</h1>
        <a href="#/create" id="register-btn">Unete a la comunidad de emprendedores</a>
        </div>
        </div>`

        containerHome.innerHTML = contentHome;
        return containerHome;
}