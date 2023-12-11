"use client";
import Image from "next/image";
import UserBox from "./UserBox";
import cx from "classnames";
import { CSSTransition, TransitionGroup } from "react-transition-group";

export default function HeaderDash() {
  return (
    <>
      <TransitionGroup>
        <CSSTransition
          component="div"
          className={cx("app-header", "bg-light header-text-dark", {
            "header-shadow": true,
          })}
          appear={true}
          timeout={1500}
          enter={false}
          exit={false}
        >
          <div>
            <div
              className={cx("app-header__content", {
                "header-mobile-open": true,
              })}
            >
              <div className="app-header-left"></div>
              <div className="app-header-right">
                <UserBox />
              </div>
            </div>
          </div>
        </CSSTransition>
      </TransitionGroup>
    </>
  );
}
