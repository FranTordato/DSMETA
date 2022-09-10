import logo from '../../assets/img/logodashboard.svg'
import'./styles.css'
function Header() {
    return (
        <header>
            <div className="dsmeta-logo-container">
                <img src={logo} alt="DSMeta" />
                <h1>DSMeta</h1>
                <p>
                    Desenvolvido por<a
                        href="https://www.linkedin.com/in/francislaine-tordato-946287223">@FrancislaineTordato</a>
                </p>
            </div>
        </header>
    )
}

export default Header
