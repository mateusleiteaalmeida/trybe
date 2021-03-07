import React from 'react';
import PropTypes from 'prop-types'

function Item(props) {
  const { content, select, id } = props
  return (
    <div
			className="unselected"
			onClick={select}
			id={id}
		>
      {content}
    </div>
  );
}

export default Item;

Item.propTypes = {
  content: PropTypes.string.isRequired,
}
