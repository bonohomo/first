import "./Nav.css";

function Nav(props) {
    let {navigation: n} = props; // деструктуризация с двумя именами
    return (
        <nav>
            <ul>
                {
                    Object.keys(n).map(elem => {
                        return (
                            <li key={elem}>
                                <a href={n[elem]}>{elem}</a>
                            </li>
                        ) // key для li служебный, нужно уникальное значение для react // должны проходить в цикле, чтобы вызвать какой-то объект
                    })
                }
            </ul>
        </nav>
    )
}

export default Nav;