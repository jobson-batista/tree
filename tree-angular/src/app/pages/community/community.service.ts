import { Injectable } from '@angular/core';
import { User } from 'src/app/models/User';

@Injectable({
  providedIn: 'root'
})
export class CommunityService {

  constructor() { }

  getUsers(): User[] {
    return [
      {
        firstName: 'Anderson',
        lastName: 'Barbosa de Freitas',
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur volutpat pharetra eleifend. Integer urna massa, dignissim ut molestie non, commodo id justo. Etiam elementum laoreet bibendum. Pellentesque neque urna, iaculis in ornare id, ultrices eget ligula. Vivamus ac augue dolor. Vestibulum porttitor iaculis efficitur. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut varius elementum ex quis bibendum. Phasellus feugiat tellus eget ornare egestas. Mauris aliquet aliquam maximus.        Phasellus magna nibh, pulvinar eleifend sapien in, pellentesque congue ligula. Fusce in ullamcorper eros, sed pulvinar ante. Aenean interdum urna a massa pharetra tincidunt. Pellentesque sodales dolor quis elit tempus, sit amet sodales augue dictum. Morbi posuere posuere scelerisque. Proin volutpat condimentum ipsum, at fermentum augue posuere nec. Quisque ullamcorper aliquet urna, non scelerisque est. Integer vulputate quam sed justo ullamcorper, a tempus dolor interdum. Sed ut velit finibus justo condimentum auctor. Nulla eget viverra tellus. Praesent porttitor neque eget sapien ultricies ultricies eget quis ante. Sed laoreet elit elementum eros auctor, eget euismod purus lacinia. Praesent quis dui eget arcu egestas lobortis.`,
        imageUrl: 'https://avatars.githubusercontent.com/u/51753091?v=4',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        firstName: 'Ismar',
        lastName: 'Rodrigues da Silva',
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur volutpat pharetra eleifend. Integer urna massa, dignissim ut molestie non, commodo id justo. Etiam elementum laoreet bibendum. Pellentesque neque urna, iaculis in ornare id, ultrices eget ligula. Vivamus ac augue dolor. Vestibulum porttitor iaculis efficitur. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut varius elementum ex quis bibendum. Phasellus feugiat tellus eget ornare egestas. Mauris aliquet aliquam maximus.        Phasellus magna nibh, pulvinar eleifend sapien in, pellentesque congue ligula. Fusce in ullamcorper eros, sed pulvinar ante. Aenean interdum urna a massa pharetra tincidunt. Pellentesque sodales dolor quis elit tempus, sit amet sodales augue dictum. Morbi posuere posuere scelerisque. Proin volutpat condimentum ipsum, at fermentum augue posuere nec. Quisque ullamcorper aliquet urna, non scelerisque est. Integer vulputate quam sed justo ullamcorper, a tempus dolor interdum. Sed ut velit finibus justo condimentum auctor. Nulla eget viverra tellus. Praesent porttitor neque eget sapien ultricies ultricies eget quis ante. Sed laoreet elit elementum eros auctor, eget euismod purus lacinia. Praesent quis dui eget arcu egestas lobortis.`,
        imageUrl: 'https://avatars.githubusercontent.com/u/51753232?v=4',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        firstName: 'Joana Darck',
        lastName: 'Soares da Silva',
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur volutpat pharetra eleifend. Integer urna massa, dignissim ut molestie non, commodo id justo. Etiam elementum laoreet bibendum. Pellentesque neque urna, iaculis in ornare id, ultrices eget ligula. Vivamus ac augue dolor. Vestibulum porttitor iaculis efficitur. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut varius elementum ex quis bibendum. Phasellus feugiat tellus eget ornare egestas. Mauris aliquet aliquam maximus.        Phasellus magna nibh, pulvinar eleifend sapien in, pellentesque congue ligula. Fusce in ullamcorper eros, sed pulvinar ante. Aenean interdum urna a massa pharetra tincidunt. Pellentesque sodales dolor quis elit tempus, sit amet sodales augue dictum. Morbi posuere posuere scelerisque. Proin volutpat condimentum ipsum, at fermentum augue posuere nec. Quisque ullamcorper aliquet urna, non scelerisque est. Integer vulputate quam sed justo ullamcorper, a tempus dolor interdum. Sed ut velit finibus justo condimentum auctor. Nulla eget viverra tellus. Praesent porttitor neque eget sapien ultricies ultricies eget quis ante. Sed laoreet elit elementum eros auctor, eget euismod purus lacinia. Praesent quis dui eget arcu egestas lobortis.`,
        imageUrl: 'https://avatars.githubusercontent.com/u/43012901?v=4',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        firstName: 'Jobson',
        lastName: 'da Silva Batista',
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur volutpat pharetra eleifend. Integer urna massa, dignissim ut molestie non, commodo id justo. Etiam elementum laoreet bibendum. Pellentesque neque urna, iaculis in ornare id, ultrices eget ligula. Vivamus ac augue dolor. Vestibulum porttitor iaculis efficitur. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut varius elementum ex quis bibendum. Phasellus feugiat tellus eget ornare egestas. Mauris aliquet aliquam maximus.        Phasellus magna nibh, pulvinar eleifend sapien in, pellentesque congue ligula. Fusce in ullamcorper eros, sed pulvinar ante. Aenean interdum urna a massa pharetra tincidunt. Pellentesque sodales dolor quis elit tempus, sit amet sodales augue dictum. Morbi posuere posuere scelerisque. Proin volutpat condimentum ipsum, at fermentum augue posuere nec. Quisque ullamcorper aliquet urna, non scelerisque est. Integer vulputate quam sed justo ullamcorper, a tempus dolor interdum. Sed ut velit finibus justo condimentum auctor. Nulla eget viverra tellus. Praesent porttitor neque eget sapien ultricies ultricies eget quis ante. Sed laoreet elit elementum eros auctor, eget euismod purus lacinia. Praesent quis dui eget arcu egestas lobortis.`,
        imageUrl: 'https://avatars.githubusercontent.com/u/51756630?v=4',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        firstName: 'Josué',
        lastName: 'Alves de Medeiros Neto',
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur volutpat pharetra eleifend. Integer urna massa, dignissim ut molestie non, commodo id justo. Etiam elementum laoreet bibendum. Pellentesque neque urna, iaculis in ornare id, ultrices eget ligula. Vivamus ac augue dolor. Vestibulum porttitor iaculis efficitur. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut varius elementum ex quis bibendum. Phasellus feugiat tellus eget ornare egestas. Mauris aliquet aliquam maximus.        Phasellus magna nibh, pulvinar eleifend sapien in, pellentesque congue ligula. Fusce in ullamcorper eros, sed pulvinar ante. Aenean interdum urna a massa pharetra tincidunt. Pellentesque sodales dolor quis elit tempus, sit amet sodales augue dictum. Morbi posuere posuere scelerisque. Proin volutpat condimentum ipsum, at fermentum augue posuere nec. Quisque ullamcorper aliquet urna, non scelerisque est. Integer vulputate quam sed justo ullamcorper, a tempus dolor interdum. Sed ut velit finibus justo condimentum auctor. Nulla eget viverra tellus. Praesent porttitor neque eget sapien ultricies ultricies eget quis ante. Sed laoreet elit elementum eros auctor, eget euismod purus lacinia. Praesent quis dui eget arcu egestas lobortis.`,
        imageUrl: 'https://avatars.githubusercontent.com/u/51420645?v=4',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]
  }
}
