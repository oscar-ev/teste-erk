// Dados exibidos no cabeçalho para cada tela do painel.
const paginas = {
  dashboard: { titulo: 'Dashboard', descricao: 'Visão geral da saúde financeira dos seus alunos.' },
  alunos: { titulo: 'Alunos', descricao: 'Consulte a situação financeira individual.' },
  financeiro: { titulo: 'Financeiro', descricao: 'Controle de receitas, recebimentos e inadimplência.' },
  rentabilidade: { titulo: 'Rentabilidade', descricao: 'Analise quanto cada aluno contribui para o resultado.' },
  'bons-pagadores': { titulo: 'Bons pagadores', descricao: 'Alunos com excelente comportamento financeiro.' },
  inadimplentes: { titulo: 'Inadimplentes', descricao: 'Alunos que necessitam de atenção financeira.' }
};

// Exibe a seção solicitada e atualiza o item ativo do menu e o cabeçalho.
function mostrarTela(nomeTela) {
  const tela = document.getElementById(nomeTela);
  if (!tela || !paginas[nomeTela]) return console.error('Tela não encontrada:', nomeTela);
  // Oculta todas as telas antes de deixar somente a escolhida visível.
  document.querySelectorAll('.screen').forEach(item => item.classList.remove('active-screen'));
  document.querySelectorAll('.menu-item').forEach(item => item.classList.remove('active'));
  tela.classList.add('active-screen');
  document.querySelector(`.menu-item[data-tela="${nomeTela}"]`)?.classList.add('active');
  document.getElementById('page-title').textContent = paginas[nomeTela].titulo;
  document.getElementById('page-description').textContent = paginas[nomeTela].descricao;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Aplica simultaneamente o texto digitado e o status selecionado à tabela.
function filtrarAlunos() {
  const termo = document.getElementById('searchAluno')?.value.toLowerCase().trim() ?? '';
  const status = document.getElementById('filtroStatus')?.value ?? '';
  document.querySelectorAll('#tabelaAlunos tbody tr').forEach(linha => {
    const texto = linha.textContent.toLowerCase();
    linha.hidden = !(texto.includes(termo) && (!status || linha.textContent.includes(status)));
  });
}

// Aguarda o HTML estar pronto antes de procurar elementos e registrar eventos.
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.menu-item').forEach(menu => menu.addEventListener('click', event => { event.preventDefault(); mostrarTela(menu.dataset.tela); }));
  document.getElementById('searchAluno')?.addEventListener('input', filtrarAlunos);
  document.getElementById('filtroStatus')?.addEventListener('change', filtrarAlunos);
  mostrarTela('dashboard');
});
