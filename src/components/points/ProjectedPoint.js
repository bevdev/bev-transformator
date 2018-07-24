// import React from 'react';
import PropTypes from 'prop-types';
import { prepareNumber } from '../../shared/utility';
import { pointAsTableRow } from '../../shared/render';

const ProjectedPoint = (props) => {
    const e = prepareNumber(props.e, 3);
    const n = prepareNumber(props.n, 3);
    const h = prepareNumber(props.h, 3);
    return pointAsTableRow(props.name, e, n, h);
}

ProjectedPoint.propTypes = {
    name: PropTypes.string.isRequired,
    e: PropTypes.number,
    n: PropTypes.number,
    h: PropTypes.number
}
 
export default ProjectedPoint;