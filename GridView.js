class GridView {
  constructor() {
    this._tableClass = [];  // css classes for table
    this._element = document.querySelector('body');  // place for add table
    this.attribute = [];  // table settings
  }

  get element() {
    return this._element
  }

  set element(element) {
    if (document.querySelector(element)) {
      this._element = document.querySelector(element);
    } else {
      return false;
    }
  }

  render() {
    // -------------- create tableand add css --------------
    const table = document.createElement('table');

    this._tableClass.forEach((elem) => {
      table.classList.add(elem);
    });

    // -------------- table title render --------------
    const headerRow = document.createElement('tr');

    for (let key in this.attribute) {
      const th = document.createElement('th');
      if (this.attribute[key].label) {
        th.textContent = this.attribute[key].label
      } else {
        th.textContent = key;
      }
      headerRow.append(th);
    }

    table.append(headerRow);

    // -------------- table body render --------------


    this.data.forEach(item => {
      const tableRow = document.createElement('tr');
      for (let key in this.attribute) {
        const td = document.createElement('td');
        let value = item[key];
        if (this.attribute[key].value) {
          value = this.attribute[key].value(item);
        }
        if (this.attribute[key].src) {
          td.innerHTML = value;
        } else {
          td.textContent = value;
        }

        tableRow.append(td);
      }

      table.append(tableRow);
    })

    // -------------- table render --------------
    this._element.append(table);
  }
}
