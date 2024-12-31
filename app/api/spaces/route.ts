// app/api/spaces.ts
import { Space } from '../../spaces/types';

interface ApiTool {
    id: string;
    name: string;
    description: string;
    ToolType: {
        name: string;
    };
    url: string | null;
    provider: string;
    model: string;
    token_usage: number;
}

interface ApiResponse {
    result: ApiTool[];
}

export async function fetchSpaces(token: string) {
    try {
        const response = await fetch('http://localhost:8000/api/v2/tool/internal', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            cache: 'no-store'
        });

        if (!response.ok) {
            throw new Error('Failed to fetch spaces');
        }

        const data = (await response.json()) as ApiResponse;

        const transformedSpaces: Space[] = data.result.map((tool: ApiTool) => {
            let thumbnail = '❓'; // Default emoji
            switch (tool.ToolType.name) {
                case 'AutoML':
                    thumbnail = '🤖';
                    break;
                case 'Map Reduce':
                    thumbnail = '🗺️';
                    break;
                case 'Quiz Generator':
                    thumbnail = '❓';
                    break;
            }

            return {
                id: tool.id,
                title: tool.name,
                author: tool.provider,
                likes: Math.floor(tool.token_usage),
                description: tool.description,
                tags: [tool.ToolType.name, tool.model],
                thumbnail,
                url: tool.url || ''
            };
        });

        return transformedSpaces;
    } catch (error) {
        console.error('Error fetching spaces:', error);
        return [];
    }
}
