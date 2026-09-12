import React from "react";

// в классах пропсы приходят из конструктора (по умолчанию он существует на уровне реакта), можем обратиться так this.props.text
// пропсы могут передаваться только от родительских к дочерниим элементам, наоборот нельзя
class Footer extends React.Component {
    render() {
        let {copyright} = this.props;
        return (
            <footer style={{background: "lightblue", padding: "10px 0", fontWeight: "bold"}}>
                <p>{copyright}</p>
            </footer>
        )
    }

}

export default Footer;