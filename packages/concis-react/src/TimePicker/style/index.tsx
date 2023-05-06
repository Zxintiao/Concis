import styled, { css } from 'styled-components';
import { commonStyle } from '../../styles/common';

const { concisRadiusXs, concisDarkFontColor } = commonStyle;

const darkTimePickerStyle = css`
  .concis-dark-time-picker {
    .time-panel div span:hover:not(.disable) {
      color: ${concisDarkFontColor};
      background-image: red;
    }

    .disable {
      background-image: linear-gradient(var(--checked-color), var(--checked-color));
    }
  }
`;

const TimePickerStyle = styled.div<{ checkColor }>`
  .concis-time-picker,
  .concis-dark-time-picker {
    width: 150px;
    height: 220px;
    overflow: hidden;

    .time-panel {
      display: flex;
      height: 180px;

      div {
        display: flex;
        flex: 1;
        flex-direction: column;
        max-height: 200px;
        padding: 5px 0;
        overflow: auto;
        scrollbar-width: none;
        
        span {
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 2px;

          &:hover:not(.disable) {
            color: #fff;
            background-image: linear-gradient(var(--checked-color), var(--checked-color));
            background-position: center;
            border-radius: ${concisRadiusXs};
            cursor: pointer;
          }
        }

        .active {
          color: #fff;
          background-image: linear-gradient(var(--checked-color), var(--checked-color));
          background-position: center;
          border-radius: ${concisRadiusXs};
          cursor: pointer;
        }

        .disable {
          color: #a8abb2;
          background-color: #f5f7fa;
          border-radius: ${concisRadiusXs};
          cursor: not-allowed;
          opacity: 1;
        }

        &::-webkit-scrollbar {
          display: none;
        }
      }
    }

    .time-footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      box-sizing: border-box;
      width: 100%;
      height: 40px;
      padding: 0 5px;
      border-top: 1px solid #ccc;
    }
  }

  ${darkTimePickerStyle}
`;

export { TimePickerStyle };
