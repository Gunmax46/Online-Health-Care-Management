// Admin: Add new resource
document.getElementById('add-resource-form')?.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const resourceName = document.getElementById('resource-name').value;
    const resourceType = document.getElementById('resource-type').value;
    const resourceDescription = document.getElementById('resource-description').value;

    const resourceList = document.getElementById('resource-list');
    const newResource = document.createElement('li');
    newResource.textContent = `${resourceName} (${resourceType}): ${resourceDescription}`;
    resourceList.appendChild(newResource);

    alert(`Resource "${resourceName}" added successfully!`);

    // Clear form
    document.getElementById('add-resource-form').reset();
});

// Student: Search for resources
document.getElementById('search-form')?.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const searchQuery = document.getElementById('search-query').value.toLowerCase();
    const resourceListItems = document.querySelectorAll('#resource-list li');
    const searchResults = document.getElementById('search-results');

    // Clear previous search results
    searchResults.innerHTML = '';

    // Loop through resources and filter based on the search query
    resourceListItems.forEach(item => {
        if (item.textContent.toLowerCase().includes(searchQuery)) {
            const resultItem = document.createElement('li');
            resultItem.textContent = item.textContent;
            searchResults.appendChild(resultItem);
        }
    });

    if (searchResults.innerHTML === '') {
        const noResults = document.createElement('li');
        noResults.textContent = 'No resources found.';
        searchResults.appendChild(noResults);
    }
});
