using System.Collections.Generic;
using HooksLearning.Models;

namespace HooksLearning.Providers
{
    public interface IWeatherProvider
    {
        List<WeatherForecast> GetForecasts();
    }
}
