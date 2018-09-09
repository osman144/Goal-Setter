import React, {Component} from 'react';
import './EmptyNav.css';

class EmptyNav extends Component {
    
    render () {
        return (
            <div className="demo-layout-transparent mdl-layout mdl-js-layout">
                <header className="mdl-layout__header mdl-layout__header--transparent">
                    <div className="mdl-layout__header-row">
                    {/* <!-- Title --> */}
                    {/* <span class="mdl-layout-title">Goal Setter</span> */}
                    </div>
                </header>
                <div className="mdl-layout__drawer">
                    <span className="mdl-layout-title">Menu</span>
                    <nav className="mdl-navigation">
                    <a className="mdl-navigation__link" href="">About</a>
                    <a className="mdl-navigation__link" href="">Source Code</a>
                    <a className="mdl-navigation__link" href="">Link</a>
                    <a className="mdl-navigation__link" href="">Link</a>
                    </nav>
                </div>
                <main className="mdl-layout__content">
                </main>
            </div>
        )
    }


}

export default EmptyNav;