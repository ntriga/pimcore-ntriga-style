const toolbar1 = 'styles | undo redo | formatselect | ' +
    'bold italic | alignleft aligncenter ' +
    'alignright alignjustify | link';

const toolbar2 = 'table | bullist numlist outdent indent | removeformat | code | help';

const customConfig = {
    toolbar1: toolbar1,
    toolbar2: toolbar2,

    style_formats: [
        { title: 'Headers' },
        { title: 'Header 1', block: 'h1' },
        { title: 'Header 2', block: 'h2' },
        { title: 'Header 3', block: 'h3' },
        { title: 'Header 4', block: 'h4' },
        { title: 'Header 5', block: 'h5' },
        { title: 'Header 6', block: 'h6' },
        { title: 'Paragraph', block: 'p' },
        { title: 'Preformatted', block: 'pre' },
        { title: 'Button styles' },
        { title: 'Knop (primary)', selector: 'a', classes: 'btn btn-primary' },
        { title: 'Knop (secondary)', selector: 'a', classes: 'btn btn-outline-secondary' },
        { title: 'Download link', selector: 'a', classes: 'cb-download-button'},
        { title: 'Lijst voordelen', block: 'ul', classes: 'ul--usp'}
    ],
    style_formats_autohide: false,
    extended_valid_elements: 'a[class|href]'
};

window.customConfig = customConfig;