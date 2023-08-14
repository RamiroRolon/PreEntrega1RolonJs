function calcularPrestamo() {
    var monto = parseFloat(prompt("Ingrese el monto del préstamo:"));
    var tasa = parseFloat(prompt("Ingrese la tasa de interés (%):"));
    var plazo = parseInt(prompt("Ingrese el plazo en meses:"));

    if (isNaN(monto) || isNaN(tasa) || isNaN(plazo) || monto <= 0 || tasa <= 0 || plazo <= 0) {
        alert("Por favor, ingrese valores válidos.");
        return;
    }

    var tasaInteresMensual = tasa / 100 / 12;
    var cuotaMensual = (monto * tasaInteresMensual) / (1 - Math.pow(1 + tasaInteresMensual, -plazo));

    var resultado = "Cuota mensual: $" + cuotaMensual.toFixed(2);
    console.log(resultado);
    
    var desglose = "Desglose de Pagos Mensuales:\n";
    var saldoRestante = monto;

    for (var mes = 1; mes <= plazo; mes++) {
        var interesMensual = saldoRestante * tasaInteresMensual;
        var principalMensual = cuotaMensual - interesMensual;
        saldoRestante -= principalMensual;

        desglose += "Mes " + mes + " - Cuota: $" + cuotaMensual.toFixed(2) + " - Interés: $" + interesMensual.toFixed(2) + " - Principal: $" + principalMensual.toFixed(2) + " - Saldo Restante: $" + saldoRestante.toFixed(2) + "\n";
    }

    console.log(desglose);
}
