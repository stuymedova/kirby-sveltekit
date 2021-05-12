<script context='module'>
	export async function load({ fetch }) {
		const res = await fetch('/api/query', {
			method: 'POST',
			// body: JSON.stringify({
			// 	query: 'site.title',
			// }),
		});
		const data = await res.json();

		return {
			status: data.status || 200,
			props: data
		}
	}
</script>

<script>
	export let result;
	result = result.title;
</script>

<main>
	<h1>{result}</h1>
</main>