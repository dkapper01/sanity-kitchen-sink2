export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ecff58b8cf2a09147cc45e2',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink2-studio-7ybokp24',
                  apiId: '505ac322-4b83-480a-8d87-3f19555e3399'
                },
                {
                  buildHookId: '5ecff58b0da63a81201bbd3a',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink2-web-ja15vevq',
                  apiId: 'e01e3073-53eb-4b73-b60d-a25eb70f7efd'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/dkapper01/sanity-kitchen-sink2',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink2-web-ja15vevq.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
