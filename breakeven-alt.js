// Script alternativo para el gráfico de punto de equilibrio
// Este archivo implementa una solución que asegura que el gráfico
// funcione correctamente desde el primer clic y en cada actualización

let chartInstance = null;

/**
 * Genera un gráfico de punto de equilibrio
 * @param {number} costosFijos - Costos fijos totales
 * @param {number} costoVariableUnitario - Costo variable por unidad
 * @param {number} precioVenta - Precio de venta por unidad
 * @param {number} unidadesEquilibrio - Punto de equilibrio en unidades
 */
function generarGraficoAlternativo(costosFijos, costoVariableUnitario, precioVenta, unidadesEquilibrio) {
  try {
    // Limpiar y recrear el canvas para evitar problemas
    const chartContainer = document.getElementById('chart-container');
    if (!chartContainer) {
      console.error('No se encuentra el contenedor del gráfico');
      return false;
    }
    
    // Limpiar contenedor y crear canvas nuevo
    chartContainer.innerHTML = '<canvas id="break-even-chart" width="800" height="400"></canvas>';
    
    // Destruir instancia anterior del gráfico si existe
    if (chartInstance) {
      chartInstance.destroy();
      chartInstance = null;
    }
    
    // Dar tiempo al DOM para actualizar antes de crear el gráfico
    setTimeout(() => {
      const canvas = document.getElementById('break-even-chart');
      if (!canvas) {
        console.error('No se pudo crear el canvas');
        return;
      }
      
      const ctx = canvas.getContext('2d');
      if (!ctx) {
        console.error('No se pudo obtener el contexto del canvas');
        return;
      }
      
      console.log('Canvas y contexto obtenidos correctamente');
      
      // Calcular valores para el gráfico
      const maxUnidades = unidadesEquilibrio * 2;
      const paso = Math.max(1, Math.floor(maxUnidades / 10));
      
      // Datos para el gráfico
      const labels = [];
      const costosFijosData = [];
      const costosTotalesData = [];
      const ingresosData = [];
      
      // Generar puntos de datos
      for (let i = 0; i <= maxUnidades; i += paso) {
        labels.push(i);
        costosFijosData.push(costosFijos);
        costosTotalesData.push(costosFijos + (i * costoVariableUnitario));
        ingresosData.push(i * precioVenta);
      }
      
      // Asegurar que el punto de equilibrio está incluido
      if (!labels.includes(unidadesEquilibrio)) {
        const index = labels.findIndex(val => val > unidadesEquilibrio);
        if (index !== -1) {
          labels.splice(index, 0, unidadesEquilibrio);
          costosFijosData.splice(index, 0, costosFijos);
          costosTotalesData.splice(index, 0, costosFijos + (unidadesEquilibrio * costoVariableUnitario));
          ingresosData.splice(index, 0, unidadesEquilibrio * precioVenta);
        }
      }
      
      // Valor en el punto de equilibrio
      const ingresosEquilibrio = unidadesEquilibrio * precioVenta;
      
      // Crear el gráfico
      chartInstance = new Chart(ctx, {
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
              title: {
                display: true,
                text: 'Monto (S/)',
                color: '#666'
              },
              ticks: {
                callback: function(value) {
                  return 'S/' + value;
                }
              }
            },
            x: {
              title: {
                display: true,
                text: 'Unidades',
                color: '#666'
              }
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
            legend: {
              position: 'bottom'
            },
            title: {
              display: true,
              text: `Punto de Equilibrio: ${unidadesEquilibrio} unidades (S/${ingresosEquilibrio.toFixed(2)})`,
              font: {
                size: 16
              },
              color: '#333'
            }
          }
        }
      });
      
      console.log('Gráfico creado exitosamente');
    }, 200); // Delay para asegurar que el DOM está actualizado
    
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