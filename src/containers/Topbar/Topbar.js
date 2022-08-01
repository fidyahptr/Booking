import React, { Component } from "react";
import { connect } from "react-redux";
import { Layout } from "antd";
import appActions from "../../redux/app/actions";
import TopbarWrapper from "./topbar.style";

const { Header } = Layout;
const { toggleCollapsed } = appActions;

class Topbar extends Component {
  render() {
    const { toggleCollapsed, customizedTheme } = this.props;
    const collapsed = this.props.collapsed && !this.props.openDrawer;
    const styling = {
      background: customizedTheme.backgroundColor,
      position: "fixed",
      width: "100%",
      height: 70
    };
    return (
      <TopbarWrapper>
        <Header
          style={styling}
          className={
            collapsed ? "isomorphicTopbar collapsed" : "isomorphicTopbar"
          }
        >
          <div className="isoLeft">
            <button
              className={
                collapsed ? "triggerBtn menuCollapsed" : "triggerBtn menuOpen"
              }
              style={{ color: customizedTheme.textColor }}
              onClick={toggleCollapsed}
            />
          </div>
        </Header>
      </TopbarWrapper>
    );
  }
}

export default connect(
  state => ({
    ...state.App,
    locale: state.LanguageSwitcher.language.locale,
    customizedTheme: state.ThemeSwitcher.topbarTheme
  }),
  { toggleCollapsed }
)(Topbar);
