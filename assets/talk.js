	const gitalk = new Gitalk({
		clientID: 'bc0b6e2151c7c16f3e83',
		clientSecret: '31d4cbd47451d16abd28b729c57c79557cead673',
		repo: 'gittalk',      // The repository of store comments,
		owner: 'jiaqian1130',
		admin: ['jiaqian1130'],
		id: location.pathname,      // Ensure uniqueness and length less than 50
		distractionFreeMode: false  // Facebook-like distraction free mode

	  })
	  
	  gitalk.render('gitalk-container')
