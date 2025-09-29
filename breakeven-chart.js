// Script para generar el gráfico de punto de equilibrio
let breakEvenChart = null;

function generarGraficoPuntoEquilibrio(costosFijos, costoVariableUnitario, precioVenta, unidadesEquilibrio, canvasArg) {
  console.log('Iniciando generación del gráfico de punto de equilibrio...');
  
  try {
      // Permitir pasar un canvas opcional (para impresión)
      const canvas = canvasArg || document.getElementById('break-even-chart');
    if (!canvas) {
      console.error('Error: El canvas no existe en el DOM');
      return false;
    }
      if (canvas.clientWidth === 0 && canvas.clientHeight === 0 && !canvasArg) {
      console.warn('El canvas tiene dimensiones de 0, puede que no esté visible');
      canvas.style.width = '100%';
      canvas.style.height = '400px';
    }
    const ctx = canvas.getContext && canvas.getContext('2d');
    if (!ctx) {
      console.error('No se pudo obtener el contexto del canvas');
      return false;
    }
      if (breakEvenChart && !canvasArg) {
      try {
        breakEvenChart.destroy();
      } catch (e) {
        console.warn('No se pudo destruir el gráfico anterior:', e);
      }
    }
    
    const maxUnits = unidadesEquilibrio * 2;
    const labels = [];
    const costosFijosData = [];
    const costosTotalesData = [];
    const ingresosData = [];
    
    const step = Math.max(1, Math.floor(maxUnits / 10));
    for (let i = 0; i <= maxUnits; i += step) {
      labels.push(i);
      costosFijosData.push(costosFijos);
      costosTotalesData.push(costosFijos + (i * costoVariableUnitario));
      ingresosData.push(i * precioVenta);
    }
    
    if (!labels.includes(unidadesEquilibrio)) {
      const index = labels.findIndex(val => val > unidadesEquilibrio);
      if (index !== -1) {
        labels.splice(index, 0, unidadesEquilibrio);
        costosFijosData.splice(index, 0, costosFijos);
        costosTotalesData.splice(index, 0, costosFijos + (unidadesEquilibrio * costoVariableUnitario));
        ingresosData.splice(index, 0, unidadesEquilibrio * precioVenta);
      }
    }
    
    const ingresosEquilibrio = unidadesEquilibrio * precioVenta;
    
    breakEvenChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Costos Fijos',
            data: costosFijosData,
            borderColor: '#FF9800',
            backgroundColor: 'rgba(255, 152, 0, 0.1)',
            borderWidth: 2,
            borderDash: [5, 5],
            fill: false,
            pointRadius: 0
          },
          {
            label: 'Costos Totales',
            data: costosTotalesData,
            borderColor: '#F44336',
            backgroundColor: 'rgba(244, 67, 54, 0.1)',
            borderWidth: 2,
            fill: false
          },
          {
            label: 'Ingresos',
            data: ingresosData,
            borderColor: '#4CAF50',
            backgroundColor: 'rgba(76, 175, 80, 0.1)',
            borderWidth: 2,
            fill: false
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
            title: { display: true, text: 'Monto (S/)', color: '#666' },
            ticks: { callback: function(value) { return 'S/' + value; } }
          },
          x: {
            title: { display: true, text: 'Unidades', color: '#666' }
          }
        },
        plugins: {
          tooltip: {
            callbacks: {
              label: function(context) {
                return context.dataset.label + ': S/' + context.raw.toFixed(2);
              }
            }
          },
          legend: { position: 'bottom' },
          title: {
            display: true,
            text: `Punto de Equilibrio: ${unidadesEquilibrio} unidades (S/${ingresosEquilibrio.toFixed(2)})`,
            font: { size: 16 },
            color: '#333'
          }
        },
        elements: {
          point: { radius: 3 },
          line: { tension: 0.1 }
        },
        animation: {
          onComplete: function() {
            const chart = this.chart;
            const ctx = chart.ctx;
            const xScale = chart.scales.x;
            const yScale = chart.scales.y;
            const x = xScale.getPixelForValue(unidadesEquilibrio);
            const y = yScale.getPixelForValue(ingresosEquilibrio);
            
            ctx.save();
            ctx.beginPath();
            ctx.arc(x, y, 8, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(255, 0, 0, 0.8)';
            ctx.fill();
            ctx.strokeStyle = 'white';
            ctx.lineWidth = 2;
            ctx.stroke();
            ctx.restore();
            
            ctx.save();
            ctx.fillStyle = '#333';
            ctx.font = 'bold 12px Arial';
            ctx.textAlign = 'center';
            ctx.fillText('Punto de Equilibrio', x, y - 15);
            ctx.restore();
            
            ctx.save();
            ctx.beginPath();
            ctx.strokeStyle = 'rgba(0, 0, 0, 0.2)';
            ctx.setLineDash([5, 5]);
            ctx.moveTo(x, chart.chartArea.bottom);
            ctx.lineTo(x, chart.chartArea.top);
            ctx.stroke();
            ctx.restore();
          }
        }
      }
    });
    
    return true;

  } catch (error) {
    console.error('Error al generar el gráfico:', error);
    const chartContainer = document.getElementById('chart-container');
    if (chartContainer) {
      chartContainer.innerHTML = `<div style="padding: 20px; text-align: center; color: #f44336;">
        <span class="material-icons" style="font-size: 48px;">error_outline</span>
        <p>Error al generar el gráfico. Por favor, inténtalo de nuevo.</p>
        <p><small>${error.message}</small></p>
      </div>`;
    }
    return false;
  }
}