'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PerfectScrollbar from "react-perfect-scrollbar";
import { IoIosCalendar } from "react-icons/io";
import {
    DropdownToggle,
    DropdownMenu,
    Button,
    UncontrolledButtonDropdown,
    Nav,
    NavItem,
    NavLink,
    Row,
    Col,
    UncontrolledTooltip,
  } from "reactstrap";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import avatar1 from './assets/avatars/1.jpg'
import city3 from './assets/dropdown-header/city3.jpg'
import Image from 'next/image';

export default function UserBox() {
  return (
    <>
        <div className="header-btn-lg pe-0">
          <div className="p-0 widget-content">
            <div className="widget-content-wrapper">
              <div className="widget-content-left">
                <UncontrolledButtonDropdown>
                  <DropdownToggle color="link" className="p-0">
                    <Image width={42} className="rounded-circle" src={avatar1} alt=""/>
                    <FontAwesomeIcon
                      className="ms-2 opacity-8"
                      icon={faAngleDown}
                    />
                  </DropdownToggle>
                  <DropdownMenu end className="rm-pointers dropdown-menu-lg">
                    <div className="dropdown-menu-header">
                      <div className="dropdown-menu-header-inner bg-info">
                        <div className="menu-header-image opacity-2"
                          style={{
                            backgroundImage: "url(" + city3 + ")",
                          }}/>
                        <div className="menu-header-content text-start">
                          <div className="p-0 widget-content">
                            <div className="widget-content-wrapper">
                              <div className="widget-content-left me-3">
                                <Image width={42} className="rounded-circle" src={avatar1} alt=""/>
                              </div>
                              <div className="widget-content-left">
                                <div className="widget-heading">
                                  Alina Mcloughlin
                                </div>
                                <div className="widget-subheading opacity-8">
                                  A short profile description
                                </div>
                              </div>
                              <div className="widget-content-right me-2">
                                <Button className="btn-pill btn-shadow btn-shine" color="focus">
                                  Logout
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="scroll-area-xs"
                      style={{
                        height: "150px",
                      }}>
                      <PerfectScrollbar>
                        <Nav vertical>
                          <NavItem className="nav-item-header">
                            Activity
                          </NavItem>
                          <NavItem>
                            <NavLink href="#">
                              Chat
                              <div className="ms-auto badge rounded-pill bg-info">
                                8
                              </div>
                            </NavLink>
                          </NavItem>
                          <NavItem>
                            <NavLink href="#">Recover Password</NavLink>
                          </NavItem>
                          <NavItem className="nav-item-header">
                            My Account
                          </NavItem>
                          <NavItem>
                            <NavLink href="#">
                              Settings
                              <div className="ms-auto badge bg-success">
                                New
                              </div>
                            </NavLink>
                          </NavItem>
                          <NavItem>
                            <NavLink href="#">
                              Messages
                              <div className="ms-auto badge bg-warning">
                                512
                              </div>
                            </NavLink>
                          </NavItem>
                          <NavItem>
                            <NavLink href="#">Logs</NavLink>
                          </NavItem>
                        </Nav>
                      </PerfectScrollbar>
                    </div>
                    <Nav vertical>
                      <NavItem className="mb-0 nav-item-divider" />
                    </Nav>
                    <div className="grid-menu grid-menu-2col">
                      <Row className="g-0">
                        <Col sm="6">
                          <Button className="pt-2 pb-2 btn-icon-vertical btn-transition btn-transition-alt"
                            outline color="warning">
                            <i className="mb-2 pe-7s-chat icon-gradient bg-amy-crisp btn-icon-wrapper"> {" "} </i>
                            Message Inbox
                          </Button>
                        </Col>
                        <Col sm="6">
                          <Button className="pt-2 pb-2 btn-icon-vertical btn-transition btn-transition-alt"
                            outline color="danger">
                            <i className="mb-2 pe-7s-ticket icon-gradient bg-love-kiss btn-icon-wrapper"> {" "} </i>
                            <b>Support Tickets</b>
                          </Button>
                        </Col>
                      </Row>
                    </div>
                    <Nav vertical>
                      <NavItem className="nav-item-divider" />
                      <NavItem className="text-center nav-item-btn">
                        <Button size="sm" className="btn-wide" color="primary">
                          Open Messages
                        </Button>
                      </NavItem>
                    </Nav>
                  </DropdownMenu>
                </UncontrolledButtonDropdown>
              </div>
              <div className="widget-content-left ms-3 header-user-info">
                <div className="widget-heading">Alina Mclourd</div>
                <div className="widget-subheading">VP People Manager</div>
              </div>
              <div className="widget-content-right header-user-info ms-3">
                <Button className="p-1 btn-shadow" size="sm" onClick={()=>{console.log('help')}} color="info" id="Tooltip-1">
                  <IoIosCalendar color="#ffffff" fontSize="20px" />
                </Button>
                <UncontrolledTooltip placement="bottom" target={"Tooltip-1"}>
                  Click for Toastify Notifications!
                </UncontrolledTooltip>
              </div>
            </div>
          </div>
        </div>
      </>
  )
}
