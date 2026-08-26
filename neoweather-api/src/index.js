const corsHeaders = {
	'Access-Control-Allow-Origin': '*',
	'Access-Control-Allow-Methods': 'GET, OPTIONS',
	'Access-Control-Allow-Headers': 'Content-Type',
};

export default {
	async fetch(request, env) {
		const url = new URL(request.url);

		// CORS
		if (request.method === 'OPTIONS') {
			return new Response(null, {
				status: 204,
				headers: corsHeaders,
			});
		}

		// TESTE PRINCIPAL
		if (url.pathname === '/') {
			return new Response('NEOWEATHER API ONLINE', {
				status: 200,
				headers: corsHeaders,
			});
		}

		// PING
		if (url.pathname === '/ping') {
			return new Response('OK', {
				status: 200,
				headers: corsHeaders,
			});
		}

		// TESTE DA PREVISÃO
		if (url.pathname === '/teste') {
			return new Response('PREVISAO ESTA CHEGANDO NO WORKER', {
				status: 200,
				headers: corsHeaders,
			});
		}

		// CLIMA ATUAL
		if (url.pathname === '/clima') {
			const cidade = url.searchParams.get('cidade');

			if (!cidade) {
				return Response.json(
					{ erro: 'Cidade não informada' },
					{
						status: 400,
						headers: corsHeaders,
					},
				);
			}

			try {
				const response = await fetch(
					`https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
						cidade,
					)}&appid=${env.OPENWEATHER_API_KEY}&units=metric&lang=pt_br`,
				);

				if (!response.ok) {
					return Response.json(
						{ erro: 'Cidade não encontrada' },
						{
							status: 404,
							headers: corsHeaders,
						},
					);
				}

				const data = await response.json();

				return Response.json(data, {
					status: 200,
					headers: corsHeaders,
				});
			} catch (error) {
				return Response.json(
					{ erro: 'Erro ao buscar clima' },
					{
						status: 500,
						headers: corsHeaders,
					},
				);
			}
		}

		// PREVISÃO
		if (url.pathname === '/previsao') {
			const cidade = url.searchParams.get('cidade');

			if (!cidade) {
				return Response.json(
					{ erro: 'Cidade não informada' },
					{
						status: 400,
						headers: corsHeaders,
					},
				);
			}

			try {
				const response = await fetch(
					`https://api.openweathermap.org/data/2.5/forecast?q=${encodeURIComponent(
						cidade,
					)}&appid=${env.OPENWEATHER_API_KEY}&units=metric&lang=pt_br`,
				);

				if (!response.ok) {
					return Response.json(
						{ erro: 'Cidade não encontrada' },
						{
							status: 404,
							headers: corsHeaders,
						},
					);
				}

				const data = await response.json();

				return Response.json(data, {
					status: 200,
					headers: corsHeaders,
				});
			} catch (error) {
				return Response.json(
					{ erro: 'Erro ao buscar previsão' },
					{
						status: 500,
						headers: corsHeaders,
					},
				);
			}
		}

		return new Response('Rota não encontrada', {
			status: 404,
			headers: corsHeaders,
		});
	},
};
