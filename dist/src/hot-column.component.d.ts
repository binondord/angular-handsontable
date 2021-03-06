import { Injector, OnChanges, SimpleChanges } from '@angular/core';
export declare class HotColumnComponent implements OnChanges {
    private inj;
    private firstRun;
    private parentComponent;
    allowHtml: boolean;
    allowInsertColumn: boolean;
    allowInsertRow: boolean;
    allowInvalid: boolean;
    allowRemoveColumn: boolean;
    allowRemoveRow: boolean;
    autoColumnSize: boolean | object;
    autoComplete: any[];
    autoRowSize: boolean | object;
    autoWrapCol: boolean;
    autoWrapRow: boolean;
    bindRowsWithHeaders: boolean | string;
    cell: any[];
    cells: (row: number, column: number, prop: object) => object;
    checkedTemplate: boolean | string;
    className: string | string[];
    colHeaders: boolean | string[] | ((column: number) => string);
    collapsibleColumns: boolean | object[];
    columnHeaderHeight: number | number[];
    columns: object[] | ((column: number) => object);
    columnSorting: boolean | object;
    columnSummary: object;
    colWidths: number | number[] | string | ((column: number) => number);
    commentedCellClassName: string;
    comments: boolean | object[];
    contextMenu: boolean | object | object[];
    copyable: boolean;
    copyColsLimit: number;
    copyPaste: boolean;
    copyRowsLimit: number;
    correctFormat: boolean;
    currentColClassName: string;
    currentHeaderClassName: string;
    currentRowClassName: string;
    customBorders: boolean | object[];
    data: any[];
    dataSchema: object;
    dateFormat: string;
    debug: boolean;
    defaultDate: string;
    disableVisualSelection: boolean | string | string[];
    dropdownMenu: boolean | object | object[];
    editor: boolean | string | (() => void);
    enterBeginsEditing: boolean;
    enterMoves: object | (() => void);
    fillHandle: boolean | string | object;
    filter: boolean;
    filteringCaseSensitive: boolean;
    filters: boolean;
    fixedColumnsLeft: number;
    fixedRowsBottom: number;
    fixedRowsTop: number;
    format: string;
    formulas: boolean;
    fragmentSelection: boolean | string;
    ganttChart: object;
    headerTooltips: boolean | object;
    height: number | (() => number);
    hiddenColumns: boolean | object;
    hiddenRows: boolean | object;
    invalidCellClassName: string;
    label: object;
    language: string;
    manualColumnFreeze: boolean;
    manualColumnMove: boolean | number[];
    manualColumnResize: boolean | number[];
    manualRowMove: boolean | number[];
    manualRowResize: boolean | number[];
    maxCols: number;
    maxRows: number;
    mergeCells: boolean | object[];
    minCols: number;
    minRows: number;
    minSpareCols: number;
    minSpareRows: number;
    multiSelect: boolean;
    nestedHeaders: any[];
    noWordWrapClassName: string;
    observeChanges: boolean;
    observeDOMVisibility: boolean;
    outsideClickDeselects: boolean | ((event: Event) => boolean);
    pasteMode: string;
    persistentState: boolean;
    placeholder: any;
    placeholderCellClassName: string;
    preventOverflow: boolean | string;
    readOnly: boolean;
    readOnlyCellClassName: string;
    renderAllRows: boolean;
    renderer: string | (() => void);
    rowHeaders: boolean | string[] | (() => string);
    rowHeaderWidth: number | number[];
    rowHeights: number | number[] | string | ((row: number) => number);
    search: boolean;
    selectOptions: string[] | number[];
    skipColumnOnPaste: boolean;
    sortByRelevance: boolean;
    sortFunction: (sortOrder: boolean) => void;
    sortIndicator: boolean;
    source: any[] | (() => void);
    startCols: number;
    startRows: number;
    stretchH: string;
    strict: boolean;
    tableClassName: string | string[];
    tabMoves: object;
    title: string;
    trimDropdown: boolean;
    trimRows: boolean | number[];
    trimWhitespace: boolean;
    type: string;
    uncheckedTemplate: boolean | string;
    undo: boolean;
    validator: string | RegExp | (() => void);
    viewportColumnRenderingOffset: number | string;
    viewportRowRenderingOffset: number | string;
    visibleRows: number;
    width: number | (() => number);
    wordWrap: boolean;
    constructor(inj: Injector);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
}
