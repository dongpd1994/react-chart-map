import * as React from 'react'
import PropTypes from 'prop-types'
import styles from './component.css'
import _ from 'lodash'

export interface ITooltipProps {
  tooltip?: object
}
const propTypes = {
  tooltip: PropTypes.object
}

const Tooltip = React.forwardRef<HTMLElement, ITooltipProps>(
  (
    {
      tooltip
    },
    ref
  ) => {
    const [pTooltip, setPTooltip] = React.useState({});

    console.log(ref)

    React.useLayoutEffect(() => {
      const dTooltip = document.getElementById("tooltip-country");
      if (dTooltip && !_.isEmpty(tooltip)) {
        const wTooltop = dTooltip.getBoundingClientRect().width;
        const hTooltip = dTooltip.getBoundingClientRect().height;
        const tTooltip = _.get(tooltip, "clientY") - 5 - hTooltip;
        const fTooltip = _.get(tooltip, "clientX") - wTooltop / 2;
        setPTooltip({ t: `${tTooltip}px`, l: `${fTooltip}px` })
      }
    }, [tooltip])
    if (!_.isEmpty(tooltip)) {
      return (<div id="tooltip-country" className={styles.tooltiptext} style={{ position: "fixed", left: _.get(pTooltip, "l"), top: _.get(pTooltip, "t") }}>
        {_.get(tooltip, "country")}
      </div>)
    }
    return <div/>

  }
)

Tooltip.propTypes = propTypes;

export default Tooltip;