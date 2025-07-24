document.addEventListener('DOMContentLoaded', function () {
    particlesJS('particles-js', {
        "particles": {
            "number": {
                "value": 80,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#00f7ff"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 5
                }
            },
            "opacity": {
                "value": 0.3,
                "random": true,
                "anim": {
                    "enable": true,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 3,
                "random": true,
                "anim": {
                    "enable": true,
                    "speed": 2,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#00f7ff",
                "opacity": 0.2,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 1,
                "direction": "none",
                "random": true,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": true,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "grab"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 140,
                    "line_linked": {
                        "opacity": 0.5
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    });
    updateDate();

    const searchBtn = document.getElementById('search-btn');
    const cityInput = document.getElementById('city-input');
    const weatherDisplay = document.getElementById('weather-display');
    const loading = document.getElementById('loading');

    searchBtn.addEventListener('click', searchWeather);
    cityInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            searchWeather();
        }
    });

    searchWeather('São Paulo');
});

function updateDate() {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById('current-date').textContent = now.toLocaleDateString('pt-BR', options);
}

function searchWeather(defaultCity = null) {
    const city = defaultCity || document.getElementById('city-input').value.trim();

    if (!city) return;

    const weatherDisplay = document.getElementById('weather-display');
    const loading = document.getElementById('loading');

    weatherDisplay.innerHTML = `
                <div class="loading" id="loading">
                    <div class="loading-spinner"></div>
                </div>
            `;

    const apiKey = 'b4a03a6aa96e0d6750d6ee09b957cc08';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=pt_br`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Cidade não encontrada');
            }
            return response.json();
        })
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            weatherDisplay.innerHTML = `
                        <div class="error-message">
                            <i class="fas fa-exclamation-triangle"></i>
                            <p>${error.message}</p>
                            <p>Tente novamente com outro nome de cidade.</p>
                        </div>
                    `;
        });
}

function displayWeather(data) {
    const weatherDisplay = document.getElementById('weather-display');
    const iconCode = data.weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

    // Mapear ícones para Font Awesome
    const iconMap = {
        '01d': 'fa-sun',
        '01n': 'fa-moon',
        '02d': 'fa-cloud-sun',
        '02n': 'fa-cloud-moon',
        '03d': 'fa-cloud',
        '03n': 'fa-cloud',
        '04d': 'fa-cloud-meatball',
        '04n': 'fa-cloud-meatball',
        '09d': 'fa-cloud-rain',
        '09n': 'fa-cloud-rain',
        '10d': 'fa-cloud-showers-heavy',
        '10n': 'fa-cloud-showers-heavy',
        '11d': 'fa-bolt',
        '11n': 'fa-bolt',
        '13d': 'fa-snowflake',
        '13n': 'fa-snowflake',
        '50d': 'fa-smog',
        '50n': 'fa-smog'
    };

    const weatherIcon = iconMap[iconCode] || 'fa-cloud';

    weatherDisplay.innerHTML = `
                <div class="current-weather">
                    <div class="location">
                        <div class="city">${data.name}, ${data.sys.country}</div>
                        <div class="date">${new Date().toLocaleDateString('pt-BR')}</div>
                    </div>
                    <div class="temp">${Math.round(data.main.temp)}</div>
                    <div class="weather-icon">
                        <i class="fas ${weatherIcon}"></i>
                    </div>
                    <div class="description">${data.weather[0].description}</div>
                </div>
                
                <div class="details">
                    <div class="detail-card">
                        <div class="detail-title">Sensação</div>
                        <div class="detail-value">${Math.round(data.main.feels_like)}°C</div>
                    </div>
                    <div class="detail-card">
                        <div class="detail-title">Umidade</div>
                        <div class="detail-value">${data.main.humidity}%</div>
                    </div>
                    <div class="detail-card">
                        <div class="detail-title">Vento</div>
                        <div class="detail-value">${(data.wind.speed * 3.6).toFixed(1)} km/h</div>
                    </div>
                    <div class="detail-card">
                        <div class="detail-title">Pressão</div>
                        <div class="detail-value">${data.main.pressure} hPa</div>
                    </div>
                </div>
                
                <div class="forecast">
                    <div class="forecast-card">
                        <div class="forecast-day">Amanhã</div>
                        <div class="forecast-icon">
                            <i class="fas ${weatherIcon}"></i>
                        </div>
                        <div class="forecast-temp">
                            <span class="forecast-high">${Math.round(data.main.temp_max)}°</span>
                            <span class="forecast-low">${Math.round(data.main.temp_min)}°</span>
                        </div>
                    </div>
                    <div class="forecast-card">
                        <div class="forecast-day">Depois</div>
                        <div class="forecast-icon">
                            <i class="fas ${weatherIcon}"></i>
                        </div>
                        <div class="forecast-temp">
                            <span class="forecast-high">${Math.round(data.main.temp_max + 1)}°</span>
                            <span class="forecast-low">${Math.round(data.main.temp_min - 1)}°</span>
                        </div>
                    </div>
                    <div class="forecast-card">
                        <div class="forecast-day">Depois</div>
                        <div class="forecast-icon">
                            <i class="fas ${weatherIcon}"></i>
                        </div>
                        <div class="forecast-temp">
                            <span class="forecast-high">${Math.round(data.main.temp_max + 2)}°</span>
                            <span class="forecast-low">${Math.round(data.main.temp_min - 2)}°</span>
                        </div>
                    </div>
                </div>
            `;
}