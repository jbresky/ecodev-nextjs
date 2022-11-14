import { useState } from "react";
import { CSSTransition } from 'react-transition-group';
import { Arrow } from './icons'
import styles from '../styles/store.module.css'

export default function DropdownMenu() {
    const [activeMenu, setActiveMenu] = useState('main');
    const [menuHeight, setMenuHeight] = useState(null);

    function calcHeight(el) {
        const height = el.offsetHeight;
        setMenuHeight(height);
    }

    function DropdownItem(props) {
        return (
            <a className={styles.menuItem} onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
                <span className={styles.iconButton}>{props.leftIcon}</span>
                {props.children}
                <span className={styles.iconRight}>{props.rightIcon}</span>
            </a>
        )
    }

    return (
        <>
            <div className={styles.dropdown} style={{ height: menuHeight }}>
                <CSSTransition
                    in={activeMenu === 'main'}
                    timeout={500}
                    classNames="menu-primary"
                    unmountOnExit
                    onEnter={calcHeight}
                >
                    <div className={styles.menu}>
                        <DropdownItem
                            rightIcon={<Arrow />}
                            goToMenu="categories"
                        >
                            Categories
                        </DropdownItem>
                        <DropdownItem
                            rightIcon={<Arrow />}
                            goToMenu="price"
                        >
                            Price
                        </DropdownItem>
                    </div>
                </CSSTransition>

                <CSSTransition
                    in={activeMenu === 'categories'}
                    timeout={500}
                    classNames="menu-secondary"
                    unmountOnExit
                    onEnter={calcHeight}
                >
                    <div className={styles.menu}>
                        <DropdownItem goToMenu='main' leftIcon={<Arrow />}>
                            <h3>Categories</h3>
                        </DropdownItem>
                        <DropdownItem>Kangaroo</DropdownItem>
                        <DropdownItem>Frog</DropdownItem>
                        <DropdownItem>Horse?</DropdownItem>
                        <DropdownItem>Hedgehog</DropdownItem>
                    </div>
                </CSSTransition>

                <CSSTransition
                    in={activeMenu === 'price'}
                    timeout={500}
                    classNames="menu-secondary"
                    unmountOnExit
                    onEnter={calcHeight}
                >
                    <div className={styles.menu}>
                        <DropdownItem goToMenu='main' leftIcon={<Arrow />}>
                            <h3>Price</h3>
                        </DropdownItem>
                        <DropdownItem>
                            <div className={styles.checkboxPrice}>
                                $ <input type='checkbox' />
                            </div>
                        </DropdownItem>
                        <DropdownItem>
                            <div className={styles.checkboxPrice}>
                                $$ <input type='checkbox' />
                            </div>
                        </DropdownItem>
                        <DropdownItem>
                            <div className={styles.checkboxPrice}>
                                $$$ <input type='checkbox' />
                            </div>
                        </DropdownItem>
                    </div>
                </CSSTransition>
            </div>
        </>
    )
}