import React, { useState } from 'react';
import "../styles/LeftPanel.css"

const LeftPanel = () => {
  const [panel1Open, setPanel1Open] = useState(false);
  const [panel2Open, setPanel2Open] = useState(false);
  const [panelVisible, setPanelVisible] = useState(false); // State to control panel visibility

  return (
    <div>
      {/* Button to close left panel (cross icon) */}
      <button
        onClick={() => setPanelVisible(false)}
        className="fixed top-14 left-0 z-20 bg-red-500 text-white p-2 rounded-full"
        style={{ display: panelVisible ? 'block' : 'none' }}
      >
        x
      </button>

      {/* Left panel container */}
      {panelVisible && (
        <div className="fixed left-0 top-14 w-64 h-full bg-gray-100 p-4 overflow-y-auto" style={{ zIndex: 10 }}>
          <div className="space-y-4">
            {/* First Panel */}
            <div className="border rounded-lg bg-white p-3">
              <button
                onClick={() => setPanel1Open(!panel1Open)}
                className="flex items-center justify-between w-full text-left font-medium"
              >
                <span>Title 1</span>
                <svg
                  className={`w-5 h-5 transition-transform ${panel1Open ? 'rotate-180' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {panel1Open && (
                <div className="mt-2 ml-4 space-y-2">
                  <label className="flex items-center space-x-2">
                    <input type="radio" name="panel1" className="form-radio" />
                    <span>Option 1</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="radio" name="panel1" className="form-radio" />
                    <span>Option 2</span>
                  </label>
                </div>
              )}
            </div>

            {/* Second Panel */}
            <div className="border rounded-lg bg-white p-3">
              <button
                onClick={() => setPanel2Open(!panel2Open)}
                className="flex items-center justify-between w-full text-left font-medium"
              >
                <span>Title 2</span>
                <svg
                  className={`w-5 h-5 transition-transform ${panel2Open ? 'rotate-180' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {panel2Open && (
                <div className="mt-2 ml-4 space-y-2">
                  <label className="flex items-center space-x-2">
                    <input type="radio" name="panel2" className="form-radio" />
                    <span>Option 1</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="radio" name="panel2" className="form-radio" />
                    <span>Option 2</span>
                  </label>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LeftPanel;
