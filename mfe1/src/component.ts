class MeuComponente extends HTMLElement {
  async connectedCallback() {
    this.innerHTML = "<p>Carregando...</p>";
    try {
      const res = await fetch("/api/hello");
      const data = await res.json();
      this.innerHTML = `<p style="color:green">Micro frontend: ${data.mensagem}</p>`;
    } catch (e) {
      this.innerHTML = `<p style="color:red">Erro ao chamar a API: ${e}</p>`;
    }
  }
}

customElements.define("meu-componente", MeuComponente);
