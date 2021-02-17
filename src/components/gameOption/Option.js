import React from "react";
import PropTypes from "prop-types";

import "./Option.scss";

const Option = ({ Icon, onClick = () => {}, color }) => {
  return (
    <div
      className="game-option-container"
      onClick={onClick}
      style={{ backgroundColor: color }}
    >
      <div className="game-option-container__icon-block">
        <Icon />
      </div>
    </div>
  );
};

Option.propTypes = {
  Icon: PropTypes.any.isRequired,
  color: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default Option;
