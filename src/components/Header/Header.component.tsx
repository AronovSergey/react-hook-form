import React from "react";

interface Props {
  renderCount?: number;
  description?: string;
  note?: string;
}

const Header = ({ renderCount, description, note }: Props) => (
  <>
    <span className="counter">Render Count: {renderCount}</span>
    <h1 className="h1">
      <svg
        width="40px"
        height="40px"
        viewBox="0 0 150 150"
        style={{
          top: 0,
          position: "relative",
          marginRight: 10,
        }}
      >
        <defs />
        <g stroke="none" fill="none">
          <g>
            <rect
              id="Rectangle"
              fill="#EC5990"
              x="0"
              y="0"
              width="150"
              height="150"
              rx="20"
            />
            <g
              id="logo"
              transform="translate(40.000000, 32.000000)"
              fill="#FFFFFF"
            >
              <g id="Group">
                <path
                  d="M58.56,6.32 L43.14,6.32 C42.0094162,2.78084259 38.7203539,0.378725649 40.005,0.378725649 C31.289646140.378725649 28.0005838,2.78084259 26.87,6.32 L11.44,6.32 C5.36486775,6.32 0.44,11.2448678 0.44,17.32 L0.44,74.63 C0.44,80.7051322 5.36486775,85.63 11.44,85.63 L58.56,85.63 C64.6351322,85.63 69.56,80.7051322 69.56,74.63 L69.56,17.32 C69.56,11.2448678 64.6351322,6.32 58.56,6.32 L58.56,6.32 Z M27.64,8.32 C28.1196928,8.33067365 28.5393583,7.9991379 28.64,7.53 C29.2948669,4.52524549 31.9547113,2.38265933 35.03,2.38265933 C38.1052887,2.38265933 40.7651331,4.52524549 41.42,7.53 C41.5206417,7.9991379 41.9403072,8.33067365 42.42,8.32 L47.8,8.32 L47.8,14.87 C47.8,16.5268542 46.4568542,17.87 44.8,17.87 L25.25,17.87 C23.5931458,17.87 22.25,16.5268542 22.25,14.87 L22.25,8.32 L27.64,8.32 Z M67.56,74.63 C67.56,79.6005627 63.5305627,83.63 58.56,83.63 L11.44,83.63 C6.46943725,83.63 2.44,79.6005627 2.44,74.63 L2.44,17.32 C2.44,12.3494373 6.46943725,8.32 11.44,8.32 L20.25,8.32 L20.25,14.87 C20.25,17.6314237 22.4885763,19.87 25.25,19.87 L44.75,19.87 C47.5114237,19.87 49.75,17.6314237 49.75,14.87 L49.75,8.32 L58.56,8.32 C63.5305627,8.32 67.56,12.3494373 67.56,17.32 L67.56,74.63 Z"
                  id="Shape"
                />
                <path
                  d="M56.6,39 L39,39 C38.4477153,39 38,39.4477153 38,40 C38,40.5522847 38.4477153,41 39,41 L56.6,41 C57.1522847,41 57.6,40.5522847 57.6,40 C57.6,39.4477153 57.1522847,39 56.6,39 L56.6,39 Z"
                  id="Shape"
                />
                <path
                  d="M30.6,39 L13,39 C12.4477153,39 12,39.4477153 12,40 C12,40.5522847 12.4477153,41 13,41 L30.6,41 C31.1522847,41 31.6,40.5522847 31.6,40 C31.6,39.4477153 31.1522847,39 30.6,39 L30.6,39 Z"
                  id="Shape"
                />
                <path
                  d="M56.65,62 L39,62 C38.4477153,62 38,62.4477153 38,63 C38,63.5522847 38.4477153,64 39,64 L56.65,64 C57.2022847,64 57.65,63.5522847 57.65,63 C57.65,62.4477153 57.2022847,62 56.65,62 L56.65,62 Z"
                  id="Shape"
                />
                <path
                  d="M30.65,62 L13,62 C12.4477153,62 12,62.4477153 12,63 C12,63.5522847 12.4477153,64 13,64 L30.65,64 C31.2022847,64 31.65,63.5522847 31.65,63 C31.65,62.4477153 31.2022847,62 30.65,62 L30.65,62 Z"
                  id="Shape"
                />
              </g>
            </g>
          </g>
        </g>
      </svg>
      React Hook Form
    </h1>
    <p style={{ fontSize: 14, lineHeight: 1.3 }}>{description}</p>
    {note && (
      <div style={{ fontSize: 14, paddingBottom: "10px" }}>
        <p className="d-inline">Note: </p>
        <div className="d-inline">{note}</div>
      </div>
    )}
  </>
);
export default React.memo(Header);
