
import './navBar.css'

const NavBar = ({bienvenida, agradecimeinto, links}) => {
    return (
        <div className="nav">
            <h2>
                {bienvenida}
            </h2>
            <a href={ links[0].href }>{links[0].title}</a>
            <a href={ links[1].href }>{links[1].title}</a>
            <a href={ links[2].href }>{links[2].title}</a>
            <a href={ links[3].href }>{links[3].title}</a>

            <h4>
                {agradecimeinto}
            </h4>
        </div>

  )
}

export default NavBar