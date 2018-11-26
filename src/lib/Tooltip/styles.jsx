const cssRules = `
.rpt-container {
  position: absolute;
  display: flex;   
}

.rpt-bottom,
.rpt-top {
  justify-content: center;
  width: 100%;
}

.rpt-right,
.rpt-align-left {
  justify-content: flex-start;
}

.rpt-left,
.rpt-align-right {
  justify-content: flex-end;
}

.rpt-align-center {
  align-items: center;
}

.rpt-align-bottom {
  align-items: flex-end;
}

.rpt-textbox {
  position: relative;
  z-index: 2;
}

.rpt-textbox span {
  display: block;
  cursor: text;
  box-sizing: border-box;
}

.rpt-textbox span p {
  font-size: 90%;
  font-weight: normal;
  line-height: 12px;
  color: inherit;
  opacity: 0.6;
  padding: 0;
  margin: 0;
  margin-top: 6px;
}

.rpt-hover span {  
  cursor: pointer;
}

.rpt-shadow-container {
  width: 100%;
  height: 100%;
  z-index: 0;
}

.rpt-shadow-container,
.rpt-textbox-container {
  position: absolute;
  animation: none; 
}

.rpt-arrow {
transform: rotate(45deg);
width: 15px;
height: 15px;
margin:3px;
z-index: 1;
}

.rpt-alert {
  animation: rpt-alert 2s infinite;
  animation-fill-mode: initial;
}

@keyframes rpt-alert {
  70% {box-shadow: 0 0 0 10px rgba(255, 255, 255, 0)}
  100% {box-shadow: 0 0 0 10px rgba(255, 255, 255, 0)}
}

@keyframes rpt-bounce {
  0%   {transform: scale(0.8); opacity: 0.1}
  60%  {transform: scale(1.1); opacity: 1}
  100%  {transform: scale(1);}
}

@keyframes rpt-bounce-out {
  20% { transform: scale(1.1); }
  100% { transform: scale(0.8); opacity: 0.1 }
}

@keyframes rpt-fade {
  0%   { opacity: 0.1}
  100% { opacity: 1}
}

@keyframes rpt-fade-out {
  0% { opacity: 1 }
  60% { opacity: 0 }
  100% { opacity: 0}
}
`;

export default cssRules;
