var $ = window.$;
var w2ui = window.w2ui;

var config = {
    layout: {
        name: 'layout',
        padding: 0,
        panels: [
            { type: 'left', size: 200, resizable: true, minSize: 120 },
            { type: 'main', minSize: 550, overflow: 'hidden' }
        ]
    },
    sidebar: {
        name: 'sidebar',
        nodes: [
            {
                id: 'general', text: 'General', group: true, expanded: true, nodes: [
                    { id: 'grid1', text: 'Grid 1', icon: 'fa fa-list-alt', selected: true },
                    { id: 'grid2', text: 'Grid 2', icon: 'fa fa-list-alt' },
                    { id: 'html', text: 'Some HTML', icon: 'fa fa-list-alt' }
                ]
            }
        ],
        onClick: function (event) {
            switch (event.target) {
                case 'grid1':
                    w2ui.layout.html('main', w2ui.grid1);
                    break;
                case 'grid2':
                    w2ui.layout.html('main', w2ui.grid2);
                    break;
                case 'html':
                    w2ui.layout.html('main', '<div style="padding: 10px">Some HTML</div>');
                    $(w2ui.layout.el('main'))
                        .removeClass('w2ui-grid')
                        .css({
                            'border-left': '1px solid #efefef'
                        });
                    break;
            }
        }
    },
    grid1: {
        name: 'grid1',
        columns: [
            { field: 'fname', text: 'First Name', size: '180px' },
            { field: 'lname', text: 'Last Name', size: '180px' },
            { field: 'email', text: 'Email', size: '40%' },
            { field: 'sdate', text: 'Start Date', size: '120px' }
        ],
        records: [
            { recid: 1, fname: 'John', lname: 'Doe', email: 'jdoe@gmail.com', sdate: '4/3/2012' },
            { recid: 2, fname: 'Stuart', lname: 'Motzart', email: 'jdoe@gmail.com', sdate: '4/3/2012' },
            { recid: 3, fname: 'Jin', lname: 'Franson', email: 'jdoe@gmail.com', sdate: '4/3/2012' },
            { recid: 4, fname: 'Susan', lname: 'Ottie', email: 'jdoe@gmail.com', sdate: '4/3/2012' },
            { recid: 5, fname: 'Kelly', lname: 'Silver', email: 'jdoe@gmail.com', sdate: '4/3/2012' },
            { recid: 6, fname: 'Francis', lname: 'Gatos', email: 'jdoe@gmail.com', sdate: '4/3/2012' },
            { recid: 7, fname: 'Mark', lname: 'Welldo', email: 'jdoe@gmail.com', sdate: '4/3/2012' },
            { recid: 8, fname: 'Thomas', lname: 'Bahh', email: 'jdoe@gmail.com', sdate: '4/3/2012' },
            { recid: 9, fname: 'Sergei', lname: 'Rachmaninov', email: 'jdoe@gmail.com', sdate: '4/3/2012' }
        ]
    },
};

export function reset() {
    for (let key in w2ui) {
        console.log(key, w2ui[key]);
        w2ui[key].destroy();
    }
}

$(function () {
    // initialization
    $('#main').w2layout(config.layout);
    w2ui.layout.html('left', $().w2sidebar(config.sidebar));
    w2ui.layout.html('main', $().w2grid(config.grid1));
    // in memory initialization
    $().w2grid(config.grid2);
    //reset()
});

export function testing() {
    console.log('working as intended.')
}