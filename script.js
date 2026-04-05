window.addEventListener('DOMContentLoaded', () => {
  const rowsContainer = document.getElementById('rows');
  const addRowButton = document.getElementById('add-row');
  const sortRowsButton = document.getElementById('sort-rows');
  const resetRowsButton = document.getElementById('reset-rows');

  function buildRow() {
    const card = document.createElement('div');
    card.className = 'row-card';

    const initiativeInput = document.createElement('input');
    initiativeInput.type = 'number';
    initiativeInput.placeholder = '00';
    initiativeInput.name = 'initiative';
    initiativeInput.min = '0';
    initiativeInput.max = '99';
    initiativeInput.inputMode = 'numeric';
    initiativeInput.pattern = '[0-9]*';
    initiativeInput.addEventListener('input', () => {
      let value = initiativeInput.value.replace(/\D/g, '');
      if (value.length > 2) value = value.slice(0, 2);
      initiativeInput.value = value;
    });

    const textInput = document.createElement('input');
    textInput.type = 'text';
    textInput.placeholder = 'Enter name...';
    textInput.name = 'label';

    const toggle = document.createElement('input');
    toggle.type = 'checkbox';
    toggle.className = 'switch';

    card.append(textInput, initiativeInput, toggle);
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

  function sortRows() {
    const rows = Array.from(rowsContainer.children);
    rows.sort((a, b) => {
      const aValue = Number(a.querySelector('input[name="initiative"]').value || 0);
      const bValue = Number(b.querySelector('input[name="initiative"]').value || 0);
      return bValue - aValue;
    });
    rows.forEach(row => rowsContainer.appendChild(row));
  }

  addRowButton.addEventListener('click', addRow);
  if (sortRowsButton) {
    sortRowsButton.addEventListener('click', sortRows);
  }
  if (resetRowsButton) {
    resetRowsButton.addEventListener('click', resetRows);
  }

  // Start with one row by default.
  addRow();
});
