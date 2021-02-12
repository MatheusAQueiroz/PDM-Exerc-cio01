class Quadrado extends React.Component {
  render() {
    return /*#__PURE__*/(
      React.createElement("button", {
        className: "quadrado",
        onClick: () => {this.props.onClick();} },

      this.props.value));


  }}


class Tabuleiro extends React.Component {
  constructor(props) {
    super(props);
    this.init();
  }

  init() {
    if (!this.state)
    this.state = {
      quadrados: Array(9).fill(null),
      xIsNext: true };else


    this.setState({
      quadrados: Array(9).fill(null),
      xIsNext: true });

  }

  jogadaAleatoria() {
    let i;
    do {
      i = parseInt(Math.random() * 9);
    } while (
    this.state.quadrados[i]);
    this.handleClick(i);
    this.renderizarQuadrado(i);
  }

  handleClick(i) {
    if (avaliarVencedor(this.state.quadrados) || this.state.quadrados[i])
    return;
    const quadrados = this.state.quadrados.slice();
    quadrados[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      quadrados: quadrados,
      xIsNext: !this.state.xIsNext });

  }

  renderizarQuadrado(i) {
    return /*#__PURE__*/(
      React.createElement(Quadrado, {
        value: this.state.quadrados[i],
        onClick: () => {this.handleClick(i);} }));


  }

  render() {
    const vencedor = avaliarVencedor(this.state.quadrados);
    let status, acao;
    if (vencedor) {
      status = vencedor === -1 ? 'Empate!' : 'Vitória de ' + vencedor;
      acao = /*#__PURE__*/React.createElement("a", { href: "#", onClick: () => this.init() }, "Jogar Novamente");
    } else
    {
      status = 'Jogador: ' + (this.state.xIsNext ? 'X' : 'O');
      acao = /*#__PURE__*/React.createElement("a", { href: "#", onClick: () => this.jogadaAleatoria() }, "Jogada Aleat\xF3ria");
    }

    return /*#__PURE__*/(
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("div", { className: "status" },
      status, " ", /*#__PURE__*/React.createElement("br", null),
      acao), /*#__PURE__*/

      React.createElement("div", { className: "tabuleiro-jogo" }, /*#__PURE__*/
      React.createElement("div", { className: "board-row" },
      this.renderizarQuadrado(0),
      this.renderizarQuadrado(1),
      this.renderizarQuadrado(2)), /*#__PURE__*/

      React.createElement("div", { className: "board-row" },
      this.renderizarQuadrado(3),
      this.renderizarQuadrado(4),
      this.renderizarQuadrado(5)), /*#__PURE__*/

      React.createElement("div", { className: "board-row" },
      this.renderizarQuadrado(6),
      this.renderizarQuadrado(7),
      this.renderizarQuadrado(8)))));




  }}


function avaliarVencedor(quadrados) {
  let empate = true;
  const lines = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (!quadrados[8]) empate = false;
    if (!quadrados[a] || !quadrados[b])
    empate = false;else
    if (quadrados[a] === quadrados[b] && quadrados[b] === quadrados[c])
    return quadrados[a];
  }
  return empate ? -1 : null;
}

class Jogo extends React.Component {
  render() {
    return /*#__PURE__*/(
      React.createElement("div", { className: "jogo" }, /*#__PURE__*/
      React.createElement(Tabuleiro, { quadrados: Array(9).fill().map((value, pos) => pos) })));


  }}


ReactDOM.render( /*#__PURE__*/
React.createElement(Jogo, null),
document.getElementById("root"));