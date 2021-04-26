let myChart = document.getElementById('Chart').getContext('2d');

    // Global Options
    Chart.defaults.global.defaultFontFamily = 'Montserrat';
    Chart.defaults.global.defaultFontSize = 14;
    Chart.defaults.global.defaultFontColor = '#777';

    let massPopChart = new Chart(myChart, {
        type:'line',
        data:{
        labels:['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets:[{
        label: 'Extinguished fires',
        data:[
            147,
            139,
            138,
            149,
            154,
            162,
            168,
            174,
            167,
            158,
            146,
            142
        ],


        borderWidth:1,
        borderColor:'#c76006',
        hoverBorderWidth:3,
        hoverBorderColor:'#000'
        }]
    },
        options: {
        title:{
        display:false
        },
        legend:{
        display:false
        },
        layout:{
        padding:{
            left:50,
            right:0,
            bottom:0,
            top:0
        }
        },
        tooltips:{
        enabled:true
        }
    }
    });