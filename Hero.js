class Hero extends Person {
    constructor(name) {
        super(name);
    }
    render() {
        return `
        <div class="hero">
            <h2>${this.name}</h2>
            <img src="https://pbs.twimg.com/profile_images/951240859298746369/vA2OVYFE_400x400.jpg" />
            <p><em>Health</em> ${this.health}</p>
        </div>
        `
    }
}