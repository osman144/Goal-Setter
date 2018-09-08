import React from 'react';
import './EmptyNav.css';

class EmptyNav extends Component {
    
    render () {
        return (
            <div class="demo-layout-transparent mdl-layout mdl-js-layout">
                <header className="mdl-layout__header mdl-layout__header--transparent">
                    <div className="mdl-layout__header-row">
                    {/* <!-- Title --> */}
                    <span className="mdl-layout-title">Goal-Setter</span>
                    {/* <!-- Add spacer, to align navigation to the right --> */}
                    <div className="mdl-layout-spacer"></div>
                    {/* <!-- Navigation --> */}
                    </div>
                </header>
                <div className="mdl-layout__drawer">
                    <span className="mdl-layout-title">Title</span>
                    <nav className="mdl-navigation">
                    <a className="mdl-navigation__link" href="">Link</a>
                    <a className="mdl-navigation__link" href="">Link</a>
                    <a className="mdl-navigation__link" href="">Link</a>
                    <a className="mdl-navigation__link" href="">Link</a>
                    </nav>
                </div>
                <main class="mdl-layout__content">
                </main>
            </div>
        )
    }


}