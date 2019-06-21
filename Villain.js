class Villain extends Person {
    constructor(name) {
        super(name);
    }
    render() {
        return `
        <div class="Villain">
            <h2>${this.name}</h2>
            <img src="https://i.ytimg.com/vi/5HRY4LUl5lc/hqdefault.jpg" />
            <p><em>Health</em> ${this.health}</p>
        </div>
        `
    }
}