function getProfileIcon(props) {
  const el = document.createElement("div");
  const dimension = props && props.small ? "50px" : "100px";
  const holder =
    props && props.name
      ? `${props.name.charAt(0)}${props.name.charAt(props.name.length - 1)}`
      : "";
  const mean =
    (props.name.charCodeAt(0) + props.name.charCodeAt(props.name.length - 1)) /
    2;
  el.style.width = dimension;
  el.style.height = dimension;
  el.style.borderRadius = "50%";
  el.style.background = getGradientColor(mean);
  el.style.display = "inline-block";
  el.style.margin = "5px";

  const holderDiv = document.createElement("div");
  holderDiv.style.textTransform = "uppercase";
  holderDiv.style.fontSize = props && props.small ? "1.6rem" : "3.6rem";
  holderDiv.style.lineHeight = props && props.small ? "30px" : "60px";
  holderDiv.style.marginTop = props && props.small ? "10px" : "18px";
  holderDiv.style.textAlign = "center";
  holderDiv.style.color = "#ffffff";
  holderDiv.innerHTML = holder;
  el.appendChild(holderDiv);
  return el;
}

function getGradientColor(mean) {
  switch (true) {
    case mean >= 97 && mean <= 102:
      return "linear-gradient(135deg, #FAD961 30%, #F76B1C 100%)";
    case mean > 102 && mean <= 107:
      return "linear-gradient(135deg, #822DAF 30%, #D80F5B 100%)";
    case mean > 107 && mean <= 112:
      return "linear-gradient(135deg, #67C0F5 30%, #328AFE 100%)";
    case mean > 112 && mean <= 117:
      return "linear-gradient(135deg, #B4EC51 30%, #429321 100%)";
    default:
      return "linear-gradient(#5433ff, #20bdff)";
  }
}

class ProfileIcon extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadow = this.attachShadow({mode: 'open'});
    let elm = document.createElement('div');
    const name = this.hasAttribute('name') ? this.getAttribute('name') : '';
    const small = this.hasAttribute('small') ? true : false;
    if (this.hasAttribute('name')) {
      elm = getProfileIcon({ name, small });
    }
    shadow.appendChild(elm);
  }
}

customElements.define('profile-icon', ProfileIcon);
