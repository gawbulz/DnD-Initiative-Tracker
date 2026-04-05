window.addEventListener('DOMContentLoaded', () => {
  const rowsContainer = document.getElementById('rows');
  const addRowButton = document.getElementById('add-row');
  const resetRowsButton = document.getElementById('reset-rows');

  function buildRow() {
    const card = document.createElement('div');
    card.className = 'row-card';

    const textInput = document.createElement('input');
    textInput.type = 'text';
    textInput.placeholder = 'Enter label...';
    textInput.name = 'label';

    const toggle = document.createElement('input');
    toggle.type = 'checkbox';
    toggle.className = 'switch';

    card.append(textInput, toggle);
    return card;
  }

  function addRow() {
    const row = buildRow();
    rowsContainer.appendChild(row);
    rowsContainer.scrollTop = rowsContainer.scrollHeight;
  }

  function resetRows() {
    rowsContainer.innerHTML = '';
    addRow();
    rowsContainer.scrollTop = 0;
  }

  addRowButton.addEventListener('click', addRow);
  if (resetRowsButton) {
    resetRowsButton.addEventListener('click', resetRows);
  }

  // Start with one row by default.
  addRow();
});
